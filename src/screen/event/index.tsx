import React, { createRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';
import {
  emptyValidator,
  formatDate,
  showPopupMessage,
  stringValidator,
} from '../../utils/helpers';
import { useRef } from 'react';
import {
  Colors,
  Fonts,
  ImageView,
  Screen,
} from '../../constants/appConstants';
import c from '../../style';
import {
  ProgressiveImage,
  TextInput,
  Button,
  Header,
  AppRoot,
  MediaPickerSheet,
  DateTimePicker
} from '../../components';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Post } from '../../services/api.service';
import { ADD_EDIT_EVENT } from '../../utils/httpService';
import moment from 'moment';

type EventProps = {
  eventTitle: string;
  error: string;
  status: string;
  eventDate: Date;
  eventImages: string[];
};

const EventState = {
  eventTitle: '',
  error: '',
  status: 'valid',
  eventDate: new Date(),
  eventImages: [],
}

export default function Event({ navigation }: any): JSX.Element {
  const [error, setError] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [eventData, setEventData] = useState<EventProps>(EventState);
  const scrollRef: any = useRef(null);
  const actionSheetRef: any = createRef();

  /** checks the event name */
  const checkEventName = (): void => {
    const eventError: string = emptyValidator(
      eventData.eventTitle,
      'Event Title',
    );
    setEventData({
      ...eventData,
      error,
      status: !eventError ? 'valid' : 'invalid',
    });
    !eventError && Keyboard.dismiss();
  };

  /** pick the event date */
  const selectDate = () => {
    setVisible(true)
  };

  const handleCancel = () => {
    setVisible(false)
  };

  const handleConfirm = (date: any) => {
    setEventData({ ...eventData, eventDate: date, error: '' });
    setVisible(false)
  };

  const onCameraPress = () => {
    actionSheetRef.current.hide();
    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      selectionLimit: 5,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    /** open the camera */
    launchCamera(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri: string[] = response?.assets
        if (imageUri) {
          setEventData({
            ...eventData,
            eventImages: eventData.eventImages.concat(imageUri),
            error: '',
          });
        }
      }
    });
  };

  const onGalleryPress = () => {
    actionSheetRef.current.hide();
    const options: any = {
      mediaType: 'photo',
      selectionLimit: 5,
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    /** open the gallery */
    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri: string[] = response?.assets
        if (imageUri) {
          setEventData({
            ...eventData,
            eventImages: eventData.eventImages.concat(imageUri),
            error: '',
          });
        }
      }
    });
  };

  /** to close the actionsheety */
  const onClosePress = () => {
    actionSheetRef.current.hide();
  };

  /** to Remove the image data from eventData state */
  const toRemove = (index: number) => {
    eventData.eventImages.splice(index, 1);
    setEventData({
      ...eventData,
      eventImages: [...eventData.eventImages],
      error: '',
    });
  };

  /** toSave is an action based on the given type */
  const toSave = (type: string) => {
    if (type === 'gallery') {
      actionSheetRef.current.show();
    } else if (type === 'upload') {
      if (!eventData.eventDate) {
        setError(stringValidator('Event Date'));
      } else if (!eventData.eventTitle.trim()) {
        setError(stringValidator('Event Title'));
      } else if (eventData.eventImages.length === 0) {
        setError(stringValidator('Event Images'));
      } else {
        setError('');
        setLoading(true)
        const formData = new FormData();
        const rawDate = moment(eventData.eventDate, 'YYYY-DD-MM hh:mm:ss').utc();
        formData.append('EventDate', rawDate.format('YYYY-DD-MMTHH:mm:ss[Z]'))
        formData.append('EventTitle', eventData.eventTitle)
        eventData.eventImages.forEach((file: any) => {
          formData.append('FileList', {
            name: file?.fileName,
            size: file?.fileSize,
            type: file?.type,
            uri: file?.uri
          });
        });

        Post(ADD_EDIT_EVENT, formData).then(
          (result: any) => {
            setLoading(false)
            if (result.data.success) {
              setEventData(EventState);
              showPopupMessage(
                result.data.message,
                'You have successfully created the Event',
              );
            } else {
              showPopupMessage(
                result.data.message,
                'Something went to wrong please try again',
                true
              );
            }
          },
          error => {
            setLoading(false)
            showPopupMessage(
              'Event Upload Error',
              'Something went to wrong please try again',
              true
            );
          },
        );
      }
    } else {
      navigation.navigate('EventGallery');
    }
  };

  return (
    <AppRoot>
      <ScrollView
        ref={scrollRef}
        style={s.content}
        contentContainerStyle={s.contentContainer}>
        <Header>Event Details</Header>

        <Text style={c.textRegular}>{'Date'}</Text>
        <TouchableOpacity style={s.dateStyle} onPress={selectDate}>
          <Text style={c.textRegular}>
            {eventData.eventDate ? formatDate(eventData.eventDate) : ''}
          </Text>
        </TouchableOpacity>

        <TextInput
          title="Title"
          blurOnSubmit={false}
          onSubmitEditing={checkEventName}
          onBlur={checkEventName}
          label="Name"
          returnKeyType="next"
          value={eventData.eventTitle}
          onChangeText={(text: any) =>
            setEventData({ ...eventData, eventTitle: text, error: '' })
          }
          error={eventData.error}
          errorText={eventData.error}
        />

        <Text style={s.error}>{error}</Text>

        <Button
          bottom={Screen.hp(3)}
          /* @ts-ignore */
          style={s.buttonStyle(36, Colors.secondary)}
          mode="contained"
          text={'Select image from Gallery'}
          onPress={() => toSave('gallery')}
        />

        <ScrollView
          style={s.scrollStyle}
          horizontal={true}
          nestedScrollEnabled={true}
          contentContainerStyle={c.flexWrap}>
          {eventData.eventImages.length > 0 &&
            eventData.eventImages.map((item: any, index: number) => {
              return (
                <View key={String(index)} style={c.margin8}>
                  <TouchableOpacity
                    onPress={() => toRemove(index)}
                    style={s.imgStyle}>
                    <Image
                      source={ImageView.delete}
                      style={c.img20}
                      resizeMode={'contain'}
                    />
                  </TouchableOpacity>
                  <ProgressiveImage
                    thumbnailSource={{ uri: item.uri }}
                    source={{ uri: item.uri }}
                    style={s.progressiveImgStyle}
                    resizeMode="cover"
                  />
                </View>
              );
            })}
        </ScrollView>
      </ScrollView>

      <View style={s.bottomStyle}>
        <Button
          top={0}
          visible={loading}
          /* @ts-ignore */
          style={s.buttonStyle(50, Colors.acent)}
          mode="contained"
          text={'UPLOAD EVENT DETAILS'}
          onPress={() => toSave('upload')}
        />

        <Button
          top={50}
          bottom={10}
          /* @ts-ignore */
          style={s.buttonStyle(38, Colors.red, '50%')}
          mode="contained"
          text={'View Gallery Page'}
          onPress={() => toSave('nav')}
        />
      </View>

      <MediaPickerSheet
        sheetRef={actionSheetRef}
        onCameraPress={onCameraPress}
        onGalleryPress={onGalleryPress}
        onClosePress={() => onClosePress()}
      />

      {visible &&
        <DateTimePicker
          isVisible={visible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      }

    </AppRoot>
  );
}

const s = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: Colors.white,
  },
  error: {
    marginBottom: 8,
    fontSize: 16,
    fontFamily: Fonts.SemiBold,
    color: Colors.red,
  },
  scrollStyle: {
    flex: 1,
    marginBottom: Screen.hp(20),
  },
  /* @ts-ignore */
  buttonStyle: (h: any, color: string, width: string) => ({
    width: width ? width : '100%',
    height: h,
    backgroundColor: color,
    justifyContent: 'center',
    shadowColor: '#878787',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.0,
    elevation: 2,
    alignItems: 'center',
    alignSelf: 'center',
  }),
  disciplineNames: {
    fontStyle: 'italic',
    marginTop: 10,
  },
  dateStyle: {
    borderWidth: 1.2,
    width: '100%',
    height: 36,
    paddingHorizontal: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 8,
  },
  bottomStyle: {
    position: 'absolute',
    bottom: 0,
    width: '88%',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: Colors.white,
  },
  imgStyle: {
    position: 'absolute',
    right: 4,
    top: 4,
    zIndex: 999,
  },
  progressiveImgStyle: {
    width: Screen.width / 4.3,
    height: 72,
  },
});

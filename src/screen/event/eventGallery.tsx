import React, { memo, useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { Colors, Screen } from '../../constants/appConstants';
import AppRoot from '../../components/AppRoot';
import c from '../../style';
import { ModalView, ProgressiveImage, SliderBox, Loader } from '../../components';
import moment from 'moment';
import BigList from 'react-native-big-list';
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../services/api.service";
import { GET_EVENTS } from "../../utils/httpService";
import { selectEvent, setEvent } from "../../redux/reducers/event/eventReducer";

type EventData = {
  url: string;
};

type EventProps = {
  eventTitle: string;
  error: string;
  status: string;
  eventDate: Date | string;
  eventImages: EventData[];
};

const EventGallery = ({ navigation, route }: any): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string[]>([ ]);
  const [visible, setVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const {event} = useSelector(selectEvent)
  const dispatch = useDispatch()

  useEffect(() => {
    Post(GET_EVENTS).then(
      (result: any) => {
        setLoading(false)
        if (result.data.success) {
          dispatch(setEvent(result.data.result));
        }
      },
      error => {
        setLoading(false)
      },
    );
  }, []);

  /** to Save the image and open the image modal  */
  const openModal = useCallback(
    (ImageData: any) => {
      setImageUrl(ImageData.map((e:any)=>e.fileUrl));
      setVisible(!visible);
    },
    [imageUrl, visible]
  );

  const renderItem = useCallback(
    ({ item, index }: { item: any, index: number }) => {
      return (
        <View style={s.content}>
          <View style={c.rowCenterSpaceBetween}>
            <Text style={c.textRegular}>{item.eventTitle}</Text>
            <Text style={c.textRegular}>
              {item.eventDate
                ? moment(item.eventDate).format('DD/MM/YYYY')
                : ""}
            </Text>
          </View>
          <ScrollView
            style={s.contentContainer}
            horizontal={true}
            nestedScrollEnabled={true}
            contentContainerStyle={c.flexWrap}>
            {item.fileList.length > 0 &&
              item.fileList.map((e: any, index: any) => {
                return (
                  <TouchableOpacity
                    onPress={() => openModal(item.fileList)}
                    style={{ margin: 8 }}>
                    <ProgressiveImage
                      thumbnailSource={{ uri: e.fileUrl }}
                      source={{ uri: e.fileUrl }}
                      style={s.imgStyle}
                      resizeMode="cover" />
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>
      )
    }, [imageUrl, visible]);

  /** toSave is the navigation function */
  const toSave = () => {
    navigation.navigate('Event');
  };

  return (
    <AppRoot>
      <Header>Image Gallery</Header>

      {/* @ts-ignore */}
      <BigList
        data={event}
        renderItem={renderItem}
        itemHeight={Screen.hp(38)}
      />

      <Button
        bottom={20}
        /* @ts-ignore */
        style={s.buttonStyle(38, Colors.red, '50%')}
        mode="contained"
        text={'Event Details Page'}
        onPress={toSave}
      />

      <ModalView onClose={() => setVisible(!visible)} visible={visible}>
        <SliderBox
          images={imageUrl}
          sliderBoxHeight={Screen.hp(30)}
          parentWidth={Screen.wp(86)}
        />
      </ModalView>
      <Loader visible={loading} />
    </AppRoot>
  );
};

export default memo(EventGallery);

const s = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 25,
    alignSelf: 'center',
  },
  contentContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  /* @ts-ignore */
  buttonStyle: (h: any, color: string, width: string) => ({
    width: width ? width : '100%',
    height: h,
    backgroundColor: color,
    justifyContent: 'center',
    shadowColor: "#878787",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.0,
    elevation: 2,
    alignItems: "center",
    alignSelf: "center",
  }),
  imgStyle: {
    width: Screen.width / 4,
    height: 76,
  }
});

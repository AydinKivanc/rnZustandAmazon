npm install react-native-linear-gradient
import LinearGradient from 'react-native-linear-gradient';

react-native-swiper
https://www.npmjs.com/package/react-native-swiper
npm i --save react-native-swiper@next
import Swiper from 'react-native-swiper'

react-native-svg
https://github.com/software-mansion/react-native-svg
npm install react-native-svg

react-native-star-rating-widget (once react-native-svg yi yukle)
https://www.npmjs.com/package/react-native-star-rating-widget
npm i react-native-star-rating-widget
import StarRating from 'react-native-star-rating-widget';
const Example = () => {
const [rating, setRating] = useState(0);
return (
<StarRating
        rating={rating}
        onChange={setRating}
      />
);
};

watchman dizin clean
watchman watch-del '/Users/kivancaydin/ReactNative/RnZustantAmazon'
watchman watch-project '/Users/kivancaydin/ReactNative/RnZustantAmazon'

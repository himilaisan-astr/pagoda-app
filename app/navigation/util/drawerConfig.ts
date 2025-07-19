import HomeScreen from '../../modules/home/page';
import TemplesScreen from '../../modules/temples/page';
import OrganizationsScreen from '../../modules/organizations/page';
import ESSocialScreen from '../../modules/es-social/page';
import EatsScreen from '../../modules/eats/page';
import TravelScreen from '../../modules/travel/page';
import LearningScreen from '../../modules/learning/page';
import CharityScreen from '../../modules/charity/page';

export const SCREENS = [
  { name: 'Home', icon: 'home-outline', component: HomeScreen },
  { name: 'Temples', icon: 'leaf-outline', component: TemplesScreen },
  { name: 'Organizations', icon: 'people-outline', component: OrganizationsScreen },
  { name: 'ES Social', icon: 'chatbubbles-outline', component: ESSocialScreen },
  { name: 'Eats', icon: 'restaurant-outline', component: EatsScreen },
  { name: 'Travel', icon: 'airplane-outline', component: TravelScreen },
  { name: 'Learning', icon: 'book-outline', component: LearningScreen },
  { name: 'Charity', icon: 'heart-outline', component: CharityScreen },
];

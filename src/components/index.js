import Button from './Button.vue';
import Card from './Card.vue';
import CardStatistic from './CardStatistic.vue';
import Carousel from './Carousel.vue';
import GridColumn from './GridColumn.vue';
import GridRow from './GridRow.vue';
import InputField from './InputField.vue';
import Loading from './LoadingComponent.vue';
import MediaItem from './MediaItem.vue';
import Navbar from './Navbar.vue';
import SearchInput from './SearchInput.vue';
import Sidebar from './Sidebar.vue';
import Table from './Table.vue';

export default {
  install(app) {
    app.component('Button', Button);
    app.component('Card', Card);
    app.component('CardStatistic', CardStatistic);
    app.component('Carousel', Carousel);
    app.component('GridColumn', GridColumn);
    app.component('GridRow', GridRow);
    app.component('InputField', InputField);
    app.component('Loading', Loading);
    app.component('MediaItem', MediaItem);
    app.component('Navbar', Navbar);
    app.component('SearchInput', SearchInput);
    app.component('Sidebar', Sidebar);
    app.component('Table', Table);
  },
};

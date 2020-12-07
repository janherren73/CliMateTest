import Countdown from '../../components/Countdown/Countdown.vue'
export default {
  name: 'Home',
  components: {
    Countdown
  },
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0, 
      displaySeconds: 0,
    };
  },
  methods: {
    // your methods here
  },
};

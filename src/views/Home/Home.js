import { NewBook } from '../../components/New Book/NewBoook';
export default {
  name: 'Home',

  data() {
    return {
    //test: 'dies ist ein test',
      newBook: NewBook,
      Book :
        {
          Name: 'Elefant',
          Autor: 'Martin Sutter',
          Beschreibung: 'BlablaBla',
          Rating: 4
        }

    };
  },

  methods: {
      fireBaseGet() {

      }


    // your methods here
}
};

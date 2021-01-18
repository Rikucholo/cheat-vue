export const Number = {

  data(){
    return {
      title: "hello world",
      sub: "sub hello",
      main: "sukmkb hello",
      low: "SDRGS",
    };
  },

  computed:{
    upper(){
      return this.title.toUpperCase();
    }
  },

  filters:{
    lower(value){
      return value.toLowerCase();
    }
  },
  created(){
    console.log('created a successgul');
  }

}

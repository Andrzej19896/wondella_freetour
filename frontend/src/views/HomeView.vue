<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    this.$http.get('/users') // Se añade automáticamente la baseURL
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error("Error al obtener los usuarios:", error);
      });
  }
}
</script>

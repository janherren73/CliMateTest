<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>
            Buch Titel
          </th>
        </tr>

      </thead>
      <tbody>
        <tr>
          <td>
            {{book.beschreibung}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      book: null,
    };
  },

  async created() {
    const snapshot = await this.$firestore.collection('MaxBuecher').doc(this.$route.params.id).get();
    this.book = snapshot.data();
  },
}
</script>


<style lang="scss" scoped>

</style> 
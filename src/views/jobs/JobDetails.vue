<template>
  <h1>Job Details Page</h1>
  <!-- สามารถดู parameter ที่ส่งเข้ามาได้ ใน index.js ที่เรา set path ให้ JobDetails เราใช้ :id เพราะฉะนั้นจึงเป็น params.id ถ้าเราใช้ : อันอื่น เราก็ใช้ params. ตัวอื่น -->
  <!-- <p>The Jobs id is {{ $route.params.id }}</p> -->
  <p>The Jobs id from id : {{ id }}</p>
</template>

<script>
export default {
  props: ["id"],
  
  // เราสามารถ comment data() ไปได้เลย เนื่องจากเรา รับ id มาเป็น prop อยู่แล้ว
  // data() {
  //   return {
  //     // เก็บ parameter จาก path มาใส่ไว้ใน id
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style>
</style>
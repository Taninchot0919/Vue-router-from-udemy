<template>
  <!-- ทำแบบนี้เพราะว่า เรา set job เป็น null ไว้ null ก็คือ false ดังนั้นระหว่างที่ รอ fetch ก็ให้ไม่แสดงไปก่อน พอ fetch เสร็จก็เอา data มาแสดงได้เลย เนื่องด้วยความสามารถของ v-if -->
  <div v-if="job">
    <h1>Job Details Page</h1>
    <p>The Jobs id from id : {{ id }}</p>
    <p>{{ job.title }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <!-- try to hard refresh tab -->
    <p>Loading Job preview ....</p>
  </div>
  <!-- สามารถดู parameter ที่ส่งเข้ามาได้ ใน index.js ที่เรา set path ให้ JobDetails เราใช้ :id เพราะฉะนั้นจึงเป็น params.id ถ้าเราใช้ : อันอื่น เราก็ใช้ params. ตัวอื่น -->
  <!-- <p>The Jobs id is {{ $route.params.id }}</p> -->
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  // เนื่องจากค่าที่ส่งมารับรู้ได้แค่ id อย่างเดียว และตอนนี้เราทำ json-server แล้ว และ อยากรู้ว่า id นี้ๆมีค่าเป็นอะไรบ้างเราจึงต้อง fetch ข้อมูลก่อน
  mounted() {
    // เนื่องจากเราอยากได้เฉพาะคนที่รับเข้ามาจึงต้องตามท้ายด้วย id
    fetch("http://localhost:3000/jobs/" + this.id)
      // เหมือนว่าเมื่อ fetch ได้ให้นำข้อมูลมาแปลงเป็น json
      .then((res) => res.json())
      // และนำ data ใน json มาใส่ใน jobs[]
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },

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
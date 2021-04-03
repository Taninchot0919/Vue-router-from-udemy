<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <!-- Link router ไปแต่ละตัว โดยส่งค่า params ผ่าน router-link ไปเลย โดย params จะเป็น job.id ของแต่ละตัว -->
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <!-- try to hard refresh tab -->
  <div v-else>
    <p>Loading Jobs ...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // เพราะเราจะไปใช้ json-server แล้ว เลย comment ของเก่าเอาไว้
      // jobs: [
      //   { title: "Ninja UX Designer", id: 1, details: "lorem" },
      //   { title: "Ninja Web Developer", id: 2, details: "lorem" },
      //   { title: "Ninja Vue Developer", id: 3, details: "lorem" },
      // ],
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      // เหมือนว่าเมื่อ fetch ได้ให้นำข้อมูลมาแปลงเป็น json
      .then((res) => res.json())
      // และนำ data ใน json มาใส่ใน jobs[]
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
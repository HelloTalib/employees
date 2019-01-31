<template>
  <div class="view-employee">
    <ul class="collection with-header">
      <li class="collection-item">
        <h4>Employee Name:{{employees.name}}</h4>
      </li>
      <li class="collection-item">Employee ID#:{{employees.employee_id}}</li>
      <li class="collection-item">Employee Department:{{employees.dept}}</li>
      <li class="collection-item">Employee position:{{employees.position}}</li>
    </ul>
    <router-link class="btn grey" to="/">Back</router-link>
    <button @click="deleteEmployee()" class="red btn">Delete</button>
  </div>
</template>

<script>
import db from "@/firebaseConfig";
export default {
  data() {
    return {
      employees: []
    };
  },
  created() {
    let ref = db
      .collection("employees")
      .where("employee_id", "==", this.$route.params.employee_id);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.employees = doc.data();
        this.employees.id = doc.id;
      });
    });
  },
  methods: {
    deleteEmployee() {
      if (confirm("Are you sure ?")) {
        let ref = db
          .collection("employees")
          .where("employee_id", "==", this.$route.params.employee_id);
        ref.get().then(snapshot => {
          snapshot.forEach(doc => {
            doc.ref.delete();
            this.$router.push('/')
          });
        });
      }
    }
  }
};
</script>
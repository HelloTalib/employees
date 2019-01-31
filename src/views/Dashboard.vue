<template>
  <div id="dashboard">
    <h3>Dashboard</h3>
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>employees</h4>
      </li>
      <li v-for="employee in employees" :key="employee.id" class="collection-item">
        <div class="chip">{{employee.dept}}</div>
        {{employee.employee_id}} : {{employee.name}}

        <router-link :to="{name:'view-employee', params:{employee_id:employee.employee_id}}">
          <i class="material-icons right ">visibility</i>
        </router-link>
      </li>
    </ul>
  <div class="fixed-action-btn">
      <router-link to="/add" class="btn-floating btn-large indigo">
      <i class="material-icons">add</i>
      </router-link>
  </div>
  </div>
</template>


<script>
import db from '@/firebaseConfig'
export default {
  name:'dashboard',
  data(){
    return{
       employees:[]
    }
  },
  created(){
    db.collection('employees').onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if(change.type === 'added'){
          this.employees.push({
            ...change.doc.data(),
            id:change.doc.id
          })
        }
      })
    })
  }
};
</script>



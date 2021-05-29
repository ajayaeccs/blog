<template>
  <div>
    <table border="2px" class="employee">
        <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Salary</th>
            <th>Employee Age</th>
            <th>Action</th>
        </tr>
        <tr v-for="e in employeeList" v-bind:key="e.id">
            <td>{{e.id}}</td>
            <td>{{e.employee_name}}</td>
            <td>{{e.employee_salary}}</td>
            <td>{{e.employee_age}}</td>
            <td><b-button variant="success" v-on:click="deleteEmployee(e.id)" >Delete Record</b-button></td>
        </tr>
    </table>
  </div>
</template>
        
       
<script>
import Vue from 'vue' 
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

export default {
  name: "EmployeeList",
  data(){
      return{employeeList:[]}
  },
  methods:{
      getEmployees(){
          this.axios.get('http://localhost:3000/employees')
                    .then(resp => {this.employeeList=resp.data})
      },
      deleteEmployee(id){
         this.axios.delete('http://localhost:3000/employees/'+id)
                    .then(() => {this.getEmployees()})
      }
  },
  mounted(){
    this.getEmployees()  
  },
}
</script>

<style scoped>

.employee{
    border:2px solid blue;
    border-collapse: collapse;
    margin:30px;
}
</style>
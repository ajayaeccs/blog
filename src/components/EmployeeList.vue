<template>
  <div>
    <table border="2px" class="employee">
        <caption>Employees List</caption>
        <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Salary</th>
            <th>Employee Age</th>
        </tr>
        <tr v-for="e in employeeList" v-bind:key="e.id">
            <td>{{e.id}}</td>
            <td>{{e.employee_name}}</td>
            <td>{{e.employee_salary}}</td>
            <td>{{e.employee_age}}</td>
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
  mounted(){
      Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees')
      .then(resp => {this.employeeList=resp.data.data})
  },
};
</script>

<style scoped>
div{
    background-color:antiquewhite;
    height: 800px;
}

.employee{
    border:2px solid blue;
    border-collapse: collapse;
    margin:30px;
}
</style>
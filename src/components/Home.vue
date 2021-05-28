<template>
    <div>
        <h1> Hello! {{msg}} </h1>
        <h2 v-if="show">Conditional Rendering if</h2>
        <h2 v-else>Conditional rendering else</h2>
        <button v-on:click='toggleFunc()'>Toggle Element</button>
        &nbsp;
        <button v-on:click='hello("Nandini")'>Call Hello</button>

        <h3 >{{message}}</h3>
        <input type="text" v-model="message" />

        <h3 style="white-space:pre-line">{{message}}</h3>
        <textarea v-model="message"></textarea>
        <table border="1px" style="border-collapse:collapse;">
            <caption>User Details</caption>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.contact}}</td>
            </tr>
        </table>
    </div>
</template>
<script>

export default{
        name:'Home',
        props:{
            msg:String
        },
        methods:{
            hello(data){alert("Hello!" + data)},
            toggleFunc(){
                this.show=!this.show;
            }
        },
        data(){
           return{show:true,
                message:"Nandini",
                  users:[
                      {id:1,name:"Ajay Srivastava",email:"ajayaeccs@gmail.com",contact:9004558830},
                      {id:2,name:"Sunil Srivastava",email:"ajayaeccs@gmail.com",contact:9450734039},
                      {id:3,name:"Mala Srivastava",email:"xxxx@gmail.com",contact:123456789},
                      {id:4,name:"Nandini Shrivastav",email:"nandinisri001@gmail.com",contact:8956132570}
                  ]         
           }

        }
    }
</script>

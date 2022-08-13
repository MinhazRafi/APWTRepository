import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const ShowInfo = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/registration")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);
    return(
        <div>
            <table className="table">
            <thead className="bg-light">
                <tr>
                    <th>DoctorName</th>
                    <th>DoctorEmail</th>
                    <th>DoctorPassword</th>
                    <th>Doctorgender</th>
                    <th>DoctorBg</th>
                    <th>DoctorPhone</th>
                    <th>DoctorSpecialization</th>
                </tr>
                </thead>
                    {posts.map(post=>(
                   <tr key={post.id}>
                    <td >{post.doctor_id}</td>
                    <td >{post.doctor_name}</td>
                    <td >{post.doctor_email}</td>
                    <td >{post.doctor_password}</td>
                    <td >{post.doctor_gender}</td>
                    <td >{post.doctor_bg}</td>
                    <td >{post.doctor_phone}</td>
                    <td >{post.doctor_specialized}</td>
                </tr>
                    ))}
            </table>
        </div>
    )
}
export default ShowInfo;
<template>
    <RouterView></RouterView>
    <el-form ref="ruleFormRef" :model="user" status-icon :rules="rules" label-width="120px" class="demo-ruleForm" v-if="isActive">
        <!-- 账号 -->
        <el-form-item label="账号" prop="user">
            <el-input v-model="user.userName" type="text" autocomplete="off" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="pass">
            <el-input v-model="user.password" type="password" autocomplete="off" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm()">Submit</el-button>
            <el-button @click="resetForm()">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import axios from "axios";
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        function table() {
            router.push("/table");
        }
        return {
            table
        }
    },
    data() {
        return {
            user: {
                userName: '',
                password: ''
            },
            isActive: true
        }
    },
    methods: {
        resetForm() {
            this.user.userName = '';
            this.user.password = '';
        },
        submitForm() {
            axios.post('http://localhost:8080/dp/login',{headers:{token:'187116!@#POI+{:'}},{params:this.user}).then((response) => {
                this.table();
                this.isActive = false;
            })
        }
    }

}
</script>

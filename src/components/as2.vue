<template>
<div>
  <div>
    <v-button type="primary" @click="showAsyncModal">ADD</v-button>
    <v-modal title="AS2-DETAIL"
             :visible="asyncModalVisible"
             @ok="handleAsyncOk"
             @cancel="handleAsyncCancel"
             :confirm-loading="asyncConfirmLoading">
        <v-tabs active-tab-key="1" type="card">
        <v-tab-pane tab-key="1" tab="General">
          <v-form direction="horizontal">
        <v-form-item label="失败校验"  help="请输入数字和字母的组合" validate-status="error">
            <v-input value="无效选择" size="large"></v-input>
        </v-form-item>
        <v-form-item label="警告校验"  validate-status="warning">
            <v-input value="前方高能预警" size="large"></v-input>
        </v-form-item>
        <v-form-item label="校验中"  help="信息审核中..." has-feedback validate-status="validating">
            <v-input value="我是被校验的内容" size="large"></v-input>
        </v-form-item>
        <v-form-item label="成功校验"  has-feedback validate-status="success">
            <v-input value="我是正文" size="large"></v-input>
        </v-form-item>
        <v-form-item label="警告校验"  has-feedback validate-status="warning">
            <v-input value="前方高能预警" size="large"></v-input>
        </v-form-item>
        <v-form-item label="失败校验"  help="请输入数字和字母的组合" has-feedback validate-status="error">
            <v-input value="无效选择" size="large"></v-input>
        </v-form-item>
    </v-form>
        </v-tab-pane>
        <v-tab-pane tab-key="2" tab="Security">Security</v-tab-pane>
        <v-tab-pane tab-key="3" tab="Send">Send</v-tab-pane>
        <v-tab-pane tab-key="4" tab="MDN">MDN</v-tab-pane>
        <v-tab-pane tab-key="5" tab="Fetch File">Fetch File</v-tab-pane>
    </v-tabs>
    </v-modal>
  </div>
  <div style="padding-top:10px">
    <v-data-table :data='loadData' :columns='columns' stripe bordered>
      <template slot="td" slot-scope="props">
     <div v-if="props.column.field=='operation'">
                    <img src="../assets/detail.png"   class="head_pic"/>
                     <img src="../assets/delete.png"   class="head_pic"/>
 </div>
 <span v-else v-html="props.content"></span>
      </template>
    </v-data-table>
  </div>
</div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'as2',
       data () {
            return {
                asyncModalVisible: false,
                asyncConfirmLoading: false,
                loadData(pramas) {
                    return axios.get("../static/datatable.json",pramas).then(res =>{
                        console.log(res);
                        return res.data;
                    });
                },
                columns:[
                    {title:"Operation",field:'operation'},
                    {title:"Partner",field:'name'},
                    {title:"As2id",field:'time'},
                    {title:"Url",field:'singer'},
                    {title:"Port",field:'album'}
                ]
            }
        },

        methods: {
            showAsyncModal () {
                this.asyncModalVisible = true;
            },

            handleAsyncOk () {
                /* 对话框将在两秒后关闭 */
                this.asyncConfirmLoading = true;
                setTimeout(() => {
                    this.asyncModalVisible = false;
                    this.asyncConfirmLoading = false;
                }, 2000);
            },

            handleAsyncCancel () {
                this.asyncModalVisible = false;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

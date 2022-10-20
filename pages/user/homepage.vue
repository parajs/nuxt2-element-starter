<template>
  <div class="page-content-1200">
    <el-row :gutter="30" class="mt-5">
      <el-col :md="6" class="mb-5">
        <el-card class="box-card">
          <div class="flex">
            <div class="flexItem box-card-title">任务栏</div>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div class="task-item">
            [私信申请] 11dukeforum123456发来私信开通申请，请处理 >>
          </div>
          <div class="task-item">
            [私信申请] 11dukeforum123456发来私信开通申请，请处理 >>
          </div>
        </el-card>
        <div class="mt-5">
          <el-button type="primary" icon="el-icon-plus" style="width: 100%"
            >创建临时论坛</el-button
          >
        </div>
        <div class="mt-5">
          <el-button
            type="primary"
            plain
            icon="el-icon-edit"
            style="width: 100%"
            >告诉我们需要改进的地方</el-button
          >
        </div>
      </el-col>
      <el-col :md="12" class="mb-5">
        <div class="flex mb-5">
          <div class="flexItem forum-title">进行中的论坛 （4）</div>
          <el-tooltip
            class="item"
            effect="dark"
            content="上下拖动排序"
            placement="left"
          >
            <i class="el-icon-menu" style="color: #999"></i>
          </el-tooltip>
        </div>
        <el-card class="box-card mb-5">
          <div class="flex">
            <div class="flexItem text-truncate">
              论坛名称论坛名称论坛名称论坛名称
            </div>
            <div class="user-txt">
              11dukeforum123456<span class="ml-2">创建</span>
            </div>
          </div>
        </el-card>
        <el-card class="box-card mb-5">
          <div class="flex">
            <div class="flexItem text-truncate">
              论坛名称论坛名称论坛名称论坛名称
            </div>
            <div class="user-txt">
              11dukeforum123456<span class="ml-2">创建</span>
            </div>
          </div>
        </el-card>
        <div class="flex mb-5">
          <div class="flexItem forum-title">解散后的临时论坛 （2）</div>
          <el-tooltip
            class="item"
            effect="dark"
            content="上下拖动排序"
            placement="left"
          >
            <i class="el-icon-menu" style="color: #999"></i>
          </el-tooltip>
        </div>
        <el-card class="box-card mb-5">
          <div class="flex">
            <div class="flexItem text-truncate">
              论坛名称论坛名称论坛名称论坛名称
            </div>
            <div class="user-txt">
              11dukeforum123456<span class="ml-2">创建</span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="6" class="mb-5">
        <el-card class="box-card text-center" body-style="padding:0">
          <div class="header-avatar">
            <i class="el-icon-s-tools"></i>
            <Avatar
              size="100"
              :src="user.avatar"
              :color="user.userBackcolor"
              :text="user.userAbbr"
            />
            <div class="user-name">11dukeforum123456</div>
          </div>
          <div class="mb-3 mt-3" style="font-size: 14px">XXXX@XXX.com</div>
          <div class="mb-5" style="font-size: 14px; color: #999">
            2022/08/01 创建
          </div>
        </el-card>

        <el-card class="box-card mt-5">
          <div class="box-card-title mb-3">收藏栏</div>
          <div class="flex collect-item">
            <Avatar
              size="40"
              :src="user.avatar"
              :color="user.userBackcolor"
              :text="user.userAbbr"
            />
            <div class="flexItem ml-3">
              <div class="flex">
                <div class="text-truncate flexItem mr-3">11dukeforum123456</div>
                <div>nikename</div>
              </div>
              <div class="flex mt-2">
                <div class="status-txt flexItem">取消收藏</div>
                <div>
                  <el-button type="primary" size="mini">私信请求</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Homepage',
  layout: 'layout',
  middleware: 'auth',
  computed: {
    ...mapState(['user']),
  },
}
</script>
<style scoped>
.box-card-title {
  font-size: 16px;
  font-weight: bold;
}

.forum-title {
  font-size: 18px;
  font-weight: bold;
}

.task-item {
  margin-top: 16px;
  font-size: 14px;
}

.user-txt {
  font-size: 12px;
  color: #7f7f7f;
}

.user-name {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

.header-avatar {
  background: #eef9fe;
  padding: 20px;
  position: relative;
}

.header-avatar .deep(.avatar-box) {
  font-size: 30px;
}

.status-txt {
  color: #aaa;
}

.collect-item {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  font-size: 13px;
}

.el-icon-s-tools {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #7f7f7f;
}

.el-icon-menu::before,
.el-icon-s-tools::before {
  font-size: 22px;
}
</style>

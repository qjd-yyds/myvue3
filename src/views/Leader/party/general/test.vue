<template>
  <div class="view-box">
    <tembox tem-title="党组织概况" :temHeight="246">
      <div class="general">
        <ul class="general-box">
          <li
            class="general-box-item"
            @click="handleshow(item)"
            v-for="(item, index) in generalList"
            :key="index"
          >
            <span class="general-box-item-icon"></span>
            <div class="general-box-item-info">
              <span class="general-box-item-info-name">{{ item.name }}</span>
              <span class="general-box-item-info-value">
                <count-to :end-val="item.value"></count-to>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </tembox>
  </div>
  <dialog-Box dialogTitle="党组织概况" :width="656" :height="461" v-model:modelValue="modelShow">
    <div class="content">
      <div class="sage-view">
        <el-scrollbar style="height: 100%">
          <ul class="sage-box">
            <li class="sage-box-item" v-for="item in partyList" :key="item.id">
              <span class="sage-box-item-icon"></span>
              <div class="sage-box-item-info">
                <span class="sage-box-item-info-name">{{ item.remark }}</span>
                <span class="sage-box-item-info-value">{{ item.name }}</span>
              </div>
            </li>
          </ul>
        </el-scrollbar>
      </div>
    </div>
  </dialog-Box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useBox, useList } from "./useGeneral";

export default defineComponent({
  name: "general",
  setup: () => {
    // 处理列表
    const { generalList } = useList();
    // 处理弹框
    const { modelShow, partyList, handleshow, handleCodeData } = useBox();
    return {
      generalList,
      modelShow,
      partyList,
      handleshow,
      handleCodeData,
    };
  },
});
</script>

<style scoped lang="scss">
.view-box {
  .general {
    .general-box {
      padding: 0 22px;
      &-item {
        width: 100%;
        height: 30px;
        font-size: 18px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        align-items: center;
        padding-right: 20px;
        margin-top: 15px;
        &-icon {
          width: 10px;
          height: 10px;
          background-color: rgba(255, 160, 28, 1);
        }
        &-info {
          margin-left: 23px;
          display: flex;
          justify-content: space-between;
          flex: 1;
          height: 100%;
          align-items: center;
          &-value {
            border-bottom: 1px solid #fff;
            height: 100%;
            min-width: 43px;
            text-align: center;
            line-height: 30px;
            color: rgba(255, 217, 0, 1);
            font-size: 20px;
          }
        }
      }
    }
  }
}
.sage-view {
  height: 360px;
  .sage-box {
    padding: 0 22px;
    width: 100%;
    position: relative;
    overflow: hidden;
    &-item {
      width: 100%;
      height: 30px;
      font-size: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      padding-right: 20px;
      margin-top: 15px;
      cursor: pointer;
      &-icon {
        width: 10px;
        height: 10px;
        background-color: rgba(5, 192, 212, 1);
      }
      &-info {
        margin-left: 23px;
        display: flex;
        justify-content: space-between;
        flex: 1;
        height: 100%;
        align-items: center;
        color: #fff;
        &-value {
          border-bottom: 1px solid #fff;
          height: 100%;
          min-width: 43px;
          text-align: center;
          line-height: 30px;
          color: rgba(255, 217, 0, 1);
          font-size: 20px;
        }
      }
    }
  }
}
</style>

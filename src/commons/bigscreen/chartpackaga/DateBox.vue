<template>
  <div>
    <el-header>{{ title }}</el-header>
    <div class="visual_conTop">
      <div class="visual_conTop_box visual_conTop1">
        <div>
          <h3>接警数(起)</h3>
          <p>54</p>
          <div class="conTop_smil">
            <a class="sz"
              >日环比:<span
                >&nbsp;<img
                  src="../../../assets/img/iconup.png"
                  height="16"
                />+3%</span
              ></a
            >
            <a class="xd"
              >周环比:<span>
                &nbsp;<img
                  src="../../../assets/img/icondown.png"
                  height="16"
                />-3%</span
              ></a
            >
          </div>
        </div>
      </div>
      <div class="visual_conTop_box visual_conTop1">
        <div>
          <h3>处警数(起)</h3>
          <p>32</p>
          <div class="conTop_smil">
            <a class="sz"
              >日环比:<span
                >&nbsp;<img
                  src="../../../assets/img/iconup.png"
                  height="16"
                />+3%</span
              >
            </a>
            <a class="xd"
              >周环比:<span
                >&nbsp;<img
                  src="../../../assets/img/icondown.png"
                  height="16"
                />-3%</span
              ></a
            >
          </div>
        </div>
      </div>
      <div class="visual_conTop_box visual_conTop1">
        <div>
          <h3>有效警情(起)</h3>
          <p>23</p>
          <div class="conTop_smil">
            <a class="sz"
              >日环比:<span
                >&nbsp;<img src="../../../assets/img/iconup.png" height="16" />
                +3%</span
              ></a
            >
            <a class="xd"
              >周环比:<span>
                &nbsp;<img
                  src="../../../assets/img/icondown.png"
                  height="16"
                />-3%</span
              ></a
            >
          </div>
        </div>
      </div>
      <div class="visual_conTop_box visual_conTop1">
        <div>
          <h3>无效警情(起)</h3>
          <p>12</p>
          <div class="conTop_smil">
            <a class="xd"
              >日环比:<span>
                &nbsp;
                <img src="../../../assets/img/icondown.png" height="16" /> -3%
              </span></a
            >
            <a class="sz"
              >周环比:<span>
                &nbsp;
                <img src="../../../assets/img/iconup.png" height="16" /> +8%
              </span></a
            >
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "今日警情",
    };
  },
};
</script>

<style lang="scss" scoped>
.visual_conTop {
  color: white;
  padding: 10px 10px 15px 15px;

  .visual_conTop_box {
    padding: 10 10px;
    margin: 10px 12px;
    > div {
      height: 100%;
    }
    > div h3 {
      color: #fff;
      font-size: 16px;
      padding: 16px 0 0 20px;
    }
    > div p {
      width: 33%;
      float: left;
      line-height: 85px;
      color: #20dbfd;
      text-shadow: 0 0 25px #00d8ff;
      font-size: 35px;
      font-family: "yjsz";
      text-align: right;
    }
    > div .conTop_smil {
      width: 67%;
      height: 70px;
      float: left;
      padding-top: 23px;
    }
    > div .conTop_smil a {
      display: block;
      line-height: 20px;
      text-align: left;
      color: #fff;
      padding-left: 9px;
    }
    > div .conTop_smil a.sz {
      font-size: 10px;
      span {
        font-size: 15px;
        color: #fe3e12;
      }
    }
    > div .conTop_smil a.xd {
      font-size: 10px;
      span {
        font-size: 15px;
        color: #12fe81;
      }
    }
  }
  .visual_conTop1 {
    width: 22%;
    // height: 100%;
    float: left;
    > div {
      // background: url(../../assets/img/ksh40.png) no-repeat;
      background: url("../../../assets/img/ksh40.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
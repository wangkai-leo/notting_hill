import wepy from 'wepy'; //框架
import C from '../config'; //配置
import G from '../global'; //全局
import storage from './storage';

export default {
  /**
   * 播放背景音乐
   */
  startBackgroundMusic() {
    let that = this;
    let play_status = storage.get(C.BG_STORAGE_KEY);
    if (!play_status) {
      G.bgMusicMan = wx.getBackgroundAudioManager();
      G.bgMusicMan.src = C.BG_MUSIC;
      G.bgMusicMan.title='Tassel';
      G.bgMusicMan.play() // 开始播放
      G.bgMusicMan.onEnded(() => {
        that.startBackgroundMusic();
      });
      storage.set(C.BG_STORAGE_KEY, false);
    }
  },

  //停止背景音乐
  puaseBackgroundMusic() {
    if (G.bgMusicMan) {
      G.bgMusicMan.pause();
    }
  },
  
  //打开或关闭按钮
  palyOrStopBackgroundMusic() {
    let play_status = storage.get(C.BG_STORAGE_KEY);
    if (!play_status) {
      G.bgMusicMan.pause();
      this.setStorage(C.BG_STORAGE_KEY, true);
    } else {
      this.setStorage(C.BG_STORAGE_KEY, false);
      this.startBackgroundMusic();
    }
  },
}

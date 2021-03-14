"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { width, height, top, right } = wx.getMenuButtonBoundingClientRect();
const { brand, model, windowWidth, statusBarHeight, platform, system, safeArea, } = wx.getSystemInfoSync();
const PX = windowWidth - right;
const PY = top - statusBarHeight;
exports.default = {
    width,
    statusBarHeight,
    navBarHeight: height || 32,
    navBarWidth: right - width * 2 - PX * 2,
    navBarPadding: [PY, PX],
    safeAreaBottom: safeArea.bottom - safeArea.height,
    brand,
    model,
    platform,
    system,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3lzdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFBO0FBQzFFLE1BQU0sRUFDSixLQUFLLEVBQ0wsS0FBSyxFQUNMLFdBQVcsRUFDWCxlQUFlLEVBQ2YsUUFBUSxFQUNSLE1BQU0sRUFDTixRQUFRLEdBQ1QsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtBQUUxQixNQUFNLEVBQUUsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFBO0FBQzlCLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxlQUFlLENBQUE7QUFFaEMsa0JBQWU7SUFDYixLQUFLO0lBQ0wsZUFBZTtJQUNmLFlBQVksRUFBRSxNQUFNLElBQUksRUFBRTtJQUMxQixXQUFXLEVBQUUsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDdkMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN2QixjQUFjLEVBQUUsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtJQUNqRCxLQUFLO0lBQ0wsS0FBSztJQUNMLFFBQVE7SUFDUixNQUFNO0NBQ1AsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgd2lkdGgsIGhlaWdodCwgdG9wLCByaWdodCB9ID0gd3guZ2V0TWVudUJ1dHRvbkJvdW5kaW5nQ2xpZW50UmVjdCgpXG5jb25zdCB7XG4gIGJyYW5kLFxuICBtb2RlbCxcbiAgd2luZG93V2lkdGgsXG4gIHN0YXR1c0JhckhlaWdodCxcbiAgcGxhdGZvcm0sXG4gIHN5c3RlbSxcbiAgc2FmZUFyZWEsXG59ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKVxuXG5jb25zdCBQWCA9IHdpbmRvd1dpZHRoIC0gcmlnaHRcbmNvbnN0IFBZID0gdG9wIC0gc3RhdHVzQmFySGVpZ2h0XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgd2lkdGgsXG4gIHN0YXR1c0JhckhlaWdodCxcbiAgbmF2QmFySGVpZ2h0OiBoZWlnaHQgfHwgMzIsXG4gIG5hdkJhcldpZHRoOiByaWdodCAtIHdpZHRoICogMiAtIFBYICogMixcbiAgbmF2QmFyUGFkZGluZzogW1BZLCBQWF0sXG4gIHNhZmVBcmVhQm90dG9tOiBzYWZlQXJlYS5ib3R0b20gLSBzYWZlQXJlYS5oZWlnaHQsXG4gIGJyYW5kLFxuICBtb2RlbCxcbiAgcGxhdGZvcm0sXG4gIHN5c3RlbSxcbn1cbiJdfQ==
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "6779c672c3554a3c8da45f00c2512127";
const token =
  "007eJxTYDBPrFct74u39ft2VcT0jMRvT6s1sexN/+9mfBXgu1w5u0+Bwczc3DLZzNwo2djU1CTRONkiJdHENM3AINnI1NDI0Mh8D698SkMgI4Os4jRWRgYIBPHZGUpSi0sy89IZGAAezx4P";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "testing";

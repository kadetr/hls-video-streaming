import { Request } from "express";

export interface IVideo {
  ID: string;
  header: string;
  size: string;
  createdDate: string;
}

export interface IVideoRequest extends Request {
  video?: IVideo;
}

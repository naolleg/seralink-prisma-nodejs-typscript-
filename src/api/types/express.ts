import express from 'express';

declare module 'express' {
  export interface Request{
  
    userId?: number;
    user?:any;
   
  }
}
import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { AppService } from './app.service';
import { Redis } from 'ioredis';

@Controller()
export class AppController {}

import { Coupon } from './coupon.ts'
export interface Bar {
  id: string,
  name: string,
  description: string,
  coupons: Coupon[]
}

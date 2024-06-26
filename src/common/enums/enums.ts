export enum GenderType {
  MALE = 'Nam',
  FEMALE = 'Nữ',
  UNISEX = 'Unisex',
}

export const enum CUSTOM_MESSAGES {
  UNAUTHORIZED = 'Tài khoản hoặc mật khẩu không chính xác',
  ERROR_MONGO_ID = 'ID phải là kiểu MongoId',
}

export const enum RoleType {
  CUSTOMER = 'Khách hàng',
  ADMIN = 'Quản trị viên',
}

export enum CouponStatus {
  ACTIVE = 'Hoạt động',
  INACTIVE = 'Không hoạt động',
  EXPIED = 'Hết hạn',
}

export enum DiscountType {
  PERCENTAGE = 'Phần trăm',
  FIXED_AMOUNT = 'Số tiền',
}

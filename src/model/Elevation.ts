export enum Elevation {
  GLOBAL_NONE          = 0x00,
  GLOBAL_AUTHOR        = 0x10,
  GLOBAL_ADMINISTRATOR = 0x20,
  GLOBAL_TRUSTED       = 0x30,
  // ...
  GLOBAL_USER          = 0xE0,
  GLOBAL_BLACKLISTED   = 0xF0,

  NONE                 = 0x00,
  OWNER                = 0x01,
  ADMINISTRATOR        = 0x02,
  MODERATOR            = 0x03,
  // ...
  USER                 = 0x0E,
  BLACKLISTED          = 0x0F
}
export interface IBlockConfig {
  /** [read-only] The ID of the block code package, which is automatically generated during initialization. */
  packageId: string;
  /** [read-only] Id of the global block code package, automatically generated when published to the global. */
  globalPackageId?: string;
  /** Space Station ID, the block must be bound to a space station. */
  viewId: string;
  /** block code version, fixed three-digit version number, each release needs to be updated, please follow the semver principle to update. */
  version: string;
  /** block code entry, support js and ts. */
  entry: string;
  /** The name of the block, displayed in the block installation screen. */
  name: string;
  /**
   * The path of the block icon is automatically uploaded
   * when publishing and displayed in the block installation interface,
   * please use 64x64 png file.
   */
  icon: string;
  /**
   * The cover image of the block will be uploaded automatically when
   * it is published and displayed in the block installation interface,
   * please use a 16:9 image, 640 × 360 png or jpg file is recommended.
   */
  cover: string;
  /**
   * The cover image of the block will be uploaded automatically when
   * it is published and displayed in the block installation interface,
   * please use a 16:9 image, 640 × 360 png or jpg file is recommended.
   */
  authorName: string;
  /**
   * Author icon path, automatically uploaded when publishing,
   * displayed in the block installation screen, please use 64x64 png file.
   */
  authorIcon: string;
  /** [Optional] Author address, click on the author icon to jump. */
  authorLink: string;
  /** [Optional] Author Email address. */
  authorEmail: string;
  /** block description, displayed in the block installation screen. */
  description: { [key: string]: string };
  /** [Optional] Whether to enable iframe mode for block rendering. */
  sandbox?: boolean;
  /** block home page. */
  website?: string;
}

import {Dropdown} from "#components";

export type Expose<T extends abstract new (...args: any) => any> = InstanceType<T> | null

export type DropdownRef = Expose<typeof Dropdown>
// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	OnePlus: [
		{
			name: "OnePlus 13 with KernelSU",
			image: "/images/device/oneplus13t.png",
			specs: "White / 16G + 512GB",
			description:
				"最后一代加冲高，加上开放的BL权限可以说是神机了",
			link: "https://www.oneplus.com/cn/13",
		},
	],
	Router: [
		{
			name: "CMCC Rax3000M",
			image: "/images/device/cmccrax3000m.png",
			specs: "1000Mbps",
			description:
				"优点是用的人多，资源够多",
			link: "https://www.right.com.cn/",
		},
	],
};

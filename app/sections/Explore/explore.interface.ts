export interface ISlideItem {
	id: string
	title: string
	image: string
	icon: string
	description: string
}
export interface ISlide {
	items: ISlideItem[]
}

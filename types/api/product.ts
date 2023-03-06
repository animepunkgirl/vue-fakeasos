
export interface PriceItem {
  value: number | null,
  text: string
}

export interface Price {
  current: PriceItem,
  previous: PriceItem,
  rrp: PriceItem,
  isMarkedDown: boolean,
  isOutletPrice: boolean,
  currency: string
}

export interface Product {
  id: number,
  name: string,
  price: Price,
  colour: string,
  colourWayId: number,
  brandName: string,
  hasVariantColours: boolean,
  hasMultiplePrices: boolean,
  groupId: number | null,
  productCode: number,
  productType: string,
  url: string,
  imageUrl: string
}

interface Name {
  locale: string,
  title: string
}

interface Brand {
  brandId: number,
  name: string,
  description: string
}

interface ColorInfo {
  colourWayId: number | null,
  colourCode: string,
  colour: string,
}
interface Image extends ColorInfo {
  url: string,
  type: string,
  isPrimary: boolean
}

interface Catwalk extends Omit<ColorInfo, 'colour'> {
  url: string
}

export interface ProductExtended {
  id: number,
  name: string,
  description: string,
  alternateNames: Name[],
  gender: string,
  productCode: string,
  brand: Brand,
  sizeGuide: string,
  isNoSize: boolean,
  isOneSize: boolean,
  isInStock: boolean,
  countryOfManufacture: unknown,
  media: {
    images: Image[],
    catwalk: Catwalk[]
  }
  info: {
    aboutMe: string,
    sizeAndFit: string,
    careInfo: string
  }
  price: Price
}
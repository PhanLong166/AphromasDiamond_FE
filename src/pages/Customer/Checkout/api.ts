// api.ts

const baseUrl = "https://open.oapi.vn/location";

class Http {
  // get:
  async get(url: string) {
    console.log(url);
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
}

// class Storage
class Store {
  http: Http;

  constructor() {
    this.http = new Http();
  }

  // Lấy danh sách tỉnh/thành phố
  async getProvince() {
    try {
      const provinces = await this.http.get(`${baseUrl}/provinces?&size=64`);
      return provinces.data;
    } catch (error) {
      console.log(error);
    }
  }

  // Lấy danh sách quận/huyện dựa vào provinceCode
  async getDistrictByProvinceCode(provinceCode: number) {
    try {
      const districts = await this.http.get(
        `${baseUrl}/districts?provinceId=${provinceCode}&size=705`
      );
      return districts.data;
    } catch (error) {
      console.log(error);
    }
  }

  // Lấy danh sách phường/xã dựa vào districtCode
  async getWardByDistrictCode(districtCode: number) {
    try {
      const wards = await this.http.get(
        `${baseUrl}/wards?districtId=${districtCode}&size=10603`
      );
      return wards.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const store = new Store();

export const getProvinces = async () => {
  const provinces = await store.getProvince();
  return provinces;
};

export const getDistricts = async (id: number) => {
  const districts = await store.getDistrictByProvinceCode(id);
  return districts;
};

export const getWards = async (id: number) => {
  const wards = await store.getWardByDistrictCode(id);
  return wards;
};

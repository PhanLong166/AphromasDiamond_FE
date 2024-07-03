interface Voucher {
    price: string;
    character: string;
    eventTitle: string;
    eventName: string;
    date: string;
    time: string;
    location: string;
    locationDetails: string;
    buttonLabel: string;
    buttonLabeles: string;
    used: boolean;
  }
  
  export const vouchers: Voucher[] = [
    
    {
        price: "20",
        character: "%",
        eventTitle: "Special Voucher",
        eventName: "Aphromas Store",
        date: "Monday 15th 2016",
        time: "15:20Pm & 11:00Am",
        location: "North, South, United State, Amre",
        locationDetails: "Party Number 16,20",
        buttonLabel: "VCWELCOME10",
        buttonLabeles: "Claim Now",
        used: true,
      },
      {
        price: "30",
        character: "%",
        eventTitle: "Exclusive Discount",
        eventName: "Bargain Shop",
        date: "Wednesday 17th 2016",
        time: "10:00Am & 3:00Pm",
        location: "East, West, United State, Amre",
        locationDetails: "Party Number 30,40",
        buttonLabel: "VCBONUS5",
        buttonLabeles: "Claim Now",
        used: false,
      },
      {
        price: "22",
        character: "%",
        eventTitle: "Special Voucher",
        eventName: "Aphromas Store",
        date: "Monday 15th 2016",
        time: "15:20Pm & 11:00Am",
        location: "North, South, United State, Amre",
        locationDetails: "Party Number 16,20",
        buttonLabel: "VCFIRSTORDER",
        buttonLabeles: "Claim Now",
        used: false,
      },
    {
      price: "15",
      character: "%",
      eventTitle: "Exclusive Discount",
      eventName: "Bargain Shop",
      date: "Wednesday 17th 2016",
      time: "10:00Am & 3:00Pm",
      location: "East, West, United State, Amre",
      locationDetails: "Party Number 30,40",
      buttonLabel: "VCSPRINGSALE",
      buttonLabeles: "Claim Now",
      used: false,
    },
    // Bạn có thể thêm các voucher khác ở đây
  ];
  
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {

  public wanted_data = "";

  constructor(private route: ActivatedRoute, private router:Router) {}

  public data = [

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },
    
    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },

    {
      category:'Vehicles',
      sub_category:'cars',
      item_name:'Suzuki Alto K-10',
      item_price:'Rs. 12,300,000',
      item_condition:'used',
      item_description:'Essential number plate info (eg. ’09/58 – a car registered in 2009 but while the 58-plate was still current)',
      main_image:'https://cdn.japanesecartrade.com/jct/vehicle_image/1_1671134889639b7ea9908cc.jpg',
      sub_image_1:'https://static.carfromjapan.com/car_e1f6a79c-3d67-4290-af19-f4ba540296eb',
      sub_image_2:'https://static.carfromjapan.com/car_798dd390-b5aa-4b6d-b6fa-0c3f00e04af1_640_0',
      sub_image_3:'https://static.carfromjapan.com/car_30823a8a-5c55-4bde-91f3-45aa726ace97',
      sub_image_4:'https://static.carfromjapan.com/car_7685666d-25f4-42b3-8834-4b607c8314e7_640_0',
      seller_name:'Kasun Sandaruwan',
      phone_numbe:'0775362148',
      whatsapp:'',
      district:'Colombo',
      town:'Borella',
      posted_date:'10 days',
    },
    
  ]

  stringify = (obj: any) => JSON.stringify(obj);

  public singleItem(itemDetails:any) {
    this.router.navigate(['show/selected'], {queryParams: {selected : this.stringify(itemDetails)}, queryParamsHandling:'merge'}) 

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.wanted_data = params['selected']

      // to do........
      // pass this.wanted_data to back end
      // get response data(above request) 
      // asign it -> data[]
    })
  }
}

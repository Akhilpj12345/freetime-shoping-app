import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId: any;

  constructor(private router: Router, private activatedRoute:ActivatedRoute,private productService:ProductService, ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data:any)=>{
      this.productId=data['id']
    })

    this.productService.deleteProduct(this.productId).subscribe((item:any)=>{

      alert('product delete sucessfully')
      this.router.navigateByUrl('products')
    })
  }

}

import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { Firestore, collection, collectionData, deleteDoc, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Container } from '../clases/container';
import { Producto } from '../clases/productos';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService 
{
  LogIn(nombre: string, pass: string) {
    throw new Error('Method not implemented.');
  }

  readonly auth = getAuth();
  readonly colUsuarios = collection(this.firestore, 'usuario');
  readonly colProductos = collection(this.firestore, 'productos');
  readonly colContainer = collection(this.firestore, 'container');
  constructor(public firestore: Firestore) { }

  
  TraerUsuarios()
  {
    return collectionData(this.colUsuarios);
  }
  TraerProductos()
  {
    return collectionData(this.colProductos);
  }
  TraerContainer()
  {
    return collectionData(this.colContainer);
  }
  async GuardarUsuario(usuario : any)
  {
    const documento = doc(this.colUsuarios);
    const id = documento.id;
    await setDoc(documento,{ Nombre: usuario.nombre, Id: id, Tipo: usuario.tipo, Contra: usuario.pass});
  }

  async GuardarProductos(producto : Producto)
  {
    const documento = doc(this.colProductos);
    const id = documento.id;
    await setDoc(documento,{ Codigo: producto.codigo, Id: id, Descripcion: producto.descripcion, Stock: producto.stock, 
      Comestible : producto.comestible, Pais : producto.pais, Precio : producto.precio});
  }
  async GuardarContainer(container : Container)
  {
    const documento = doc(this.colContainer);
    const id = documento.id;
    await setDoc(documento,{ Codigo: container.codigo, Id: id, Color: container.color, Capacidad: container.capacidad,Empresa : container.empresa, Productos: container.arrayProductos});
  }
  
  ModificarContenedor( container : Container)
  {
    const docRef = doc(this.firestore, 'container', container.id);
    return updateDoc(docRef, {Codigo: container.codigo, Color: container.color, Capacidad: container.capacidad,Empresa : container.empresa});
  }

  AgregarContenedorProductos( container : Container)
  {
    const docRef = doc(this.firestore, 'container', container.id);
    return updateDoc(docRef, {Productos: container.arrayProductos});
  }

  ElimiarContenedor(container : Container)
  {
    const docRef = doc(this.firestore, 'container', container.id);
    return deleteDoc(docRef);
  }
}

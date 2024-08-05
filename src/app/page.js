"use client";
import { useState, useEffect } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { firestore } from "@/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [item, setItem] = useState({});// ??? '';

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'));
    const docs = await getDocs(snapshot);
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({...doc.data(), id: doc.id})
    })
    setInventory(inventoryList);
    useEffect(() => {
      updateInventory();
    }, []);
  }

  const addItem = async (it) => {
    const docReference = doc(collection(firestore, 'inventory'),it);
    const docSnapshot = await getDoc(docReference);
    if (docSnapshot.exists()) {
      const {quantity} = docSnapshot.data();
      await setDoc(docReference, {quantity: quantity + 1})
    } else {
      await setDoc(docReference, {quantity: 1})
    }
    await updateInventory();
  }

  const removeItem = async (it) => {
    const docReference = doc(firestore, 'inventory', it);
    const docSnapshot = await getDoc(docReference);
    if (docSnapshot.exists()) {
      const {quantity} = docSnapshot.data();
      if (quantity > 1) {
        await setDoc(docReference, {quantity: quantity - 1})
      } else {
        await deleteDoc(docReference);
    }
  }
  await updateInventory();
  }

  return (<Box>
    <Typography variant="h1">Inventory Management</Typography>
  </Box>);
}

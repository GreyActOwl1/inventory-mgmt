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




  return (<Box>
    <Typography variant="h1">Inventory Management</Typography>
  </Box>);
}

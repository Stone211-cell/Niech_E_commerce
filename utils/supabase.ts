import { createClient } from "@supabase/supabase-js";

const bucket = "product-bucket";
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
export async function uploadFile(image: File) {
  const timeStamp = Date.now();
  const newName = `product-${timeStamp}-${image.name}`;

  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, {
      cacheControl: '3600'
    });

  if (!data) throw new Error("Image upload failed!!!");
  //   const { data } = supabase.storage.from('bucket').getPublicUrl('filePath.jpg')
  // console.log(data.publicUrl)
  return supabase.storage
    .from(bucket)
    .getPublicUrl(newName).data.publicUrl
}

// Upload multiple files
export async function uploadFiles(images: File[]): Promise<string[]> {
  const uploadPromises = images.map((image) => uploadFile(image));
  return Promise.all(uploadPromises);
}
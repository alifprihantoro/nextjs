export interface data_list_post_types {
  judul: string;
  Public: boolean;
  link: string;
  tag: [];
  writer: [];
  description: string;
  content: string;
}

export interface list_post_types extends data_list_post_types {
  slug: string;
}

export const list_post = {
  judul: "",
  Public: false,
  link: "",
  tag: [""],
  writer: [""],
  description: "",
  content: "",
  slug: "",
};

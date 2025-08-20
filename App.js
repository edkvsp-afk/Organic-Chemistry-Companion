import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";

/** -------------------------------
 *  DATA
 *  ------------------------------*/
const CHAPTERS = [
  {
    title: "GOC",
    items: [
      { label: "Theory 1", url: "https://drive.google.com/file/d/1w2BFnRPvHY8ax2-uWHN-S9GEeCxx0BoJ/view?usp=drivesdk" },
      { label: "Notes 1",  url: "https://drive.google.com/file/d/1pBCv5XOPo8_C3_TKv_CJLLIOEpcXEZIE/view?usp=drivesdk" },
      { label: "Notes 2",  url: "https://drive.google.com/file/d/1pBri2UNZexJ_NOO-o-LmWt2sh0xY81IK/view?usp=drivesdk" },
      { label: "Theory (book)", url: "https://drive.google.com/file/d/1w2BFnRPvHY8ax2-uWHN-S9GEeCxx0BoJ/view?usp=drivesdk" }
    ],
  },
  {
    title: "Hydrocarbons",
    items: [
      { label: "Flowchart 1", url: "https://drive.google.com/file/d/1qRMJRJPEfcOZMpr9shkc_4sfaDy_Lte_/view?usp=drivesdk" },
      { label: "Flowchart 2", url: "https://drive.google.com/file/d/1qXahuK3WhwF4SaudOFgDrwRSL0Sn6IHO/view?usp=drivesdk" },
      { label: "Theory 1",    url: "https://drive.google.com/file/d/1PPDoVWQi5CeDI7kCMuBA0vL6AwBN-BUl/view?usp=drivesdk" },
      { label: "Theory 2",    url: "https://drive.google.com/file/d/1bu7QDbAV7OQE1n5P7w-zt6CTkUVknY1I/view?usp=drivesdk" },
      { label: "Theory 3",    url: "https://drive.google.com/file/d/1ZqrEUoH7pRXPiwKdu7SnyFhkh4KGmum8/view?usp=drivesdk" },
    ],
  },
  {
    title: "Aromatic Compounds",
    items: [{ label: "Theory", url: "https://drive.google.com/file/d/1Zsj3tUXG9dmm5PYpCLQdQO2wljYsX3qi/view?usp=drivesdk" }],
  },
  {
    title: "Alcohols, Phenols & Ethers",
    items: [
      { label: "Flowchart 1", url: "https://drive.google.com/file/d/1qIeki48cPJrmmQKkX3wYirdKKumd5Zpc/view?usp=drivesdk" },
      { label: "Flowchart 2", url: "https://drive.google.com/file/d/1qMO0v1vrB_R3IMA34KmXUOtHQtLw4_-q/view?usp=drivesdk" },
      { label: "Flowchart 3", url: "https://drive.google.com/file/d/1qHkdHeppXd6a0IZHsx726r3bLYsWv8C1/view?usp=drivesdk" },
      { label: "Flowchart 4", url: "https://drive.google.com/file/d/1qEl5rN2AT-stvYn7ue4SY0sSEOjaKwmX/view?usp=drivesdk" },
      { label: "Flowchart 5", url: "https://drive.google.com/file/d/1q52375cmW8hssI1Nnu_l-0-CmmAVM23f/view?usp=drivesdk" },
      { label: "Flowchart 6", url: "https://drive.google.com/file/d/1prvXfwn3M0MfOzLrbqDoSRP4VdjX3y0v/view?usp=drivesdk" },
      { label: "Flowchart 7", url: "https://drive.google.com/file/d/1pq_A5myNad41lI_dZwZDxJT_Sm8k88gB/view?usp=drivesdk" },
      { label: "Theory",      url: "https://drive.google.com/file/d/1uSHP9Asgq4LbmwatvYDoOFofcVwWZ3O2/view?usp=drivesdk" },
    ],
  },
  {
    title: "Alkyl & Aryl Halides (Haloalkanes & Haloarenes)",
    items: [
      { label: "Flowchart 1", url: "https://drive.google.com/file/d/1qESxHhiW64KCmWI2NGFcTTsBGg1ha7rf/view?usp=drivesdk" },
      { label: "Flowchart 2", url: "https://drive.google.com/file/d/1qfzwOMnOr3ovrwArc54HH8-i-urbTFH2/view?usp=drivesdk" },
      { label: "Flowchart 3", url: "https://drive.google.com/file/d/1qNztYSWLKhlJKa30piiopBVf4ixiFxmH/view?usp=drivesdk" },
      { label: "Flowchart 4", url: "https://drive.google.com/file/d/1qPkDiBkqOmgWCiqCY8QKTwXUHe8LYdKG/view?usp=drivesdk" },
      { label: "Flowchart 5", url: "https://drive.google.com/file/d/1qd_jKcgF_t_JyNhQjVMBjhz2ftJTPNLT/view?usp=drivesdk" },
      { label: "Flowchart 6", url: "https://drive.google.com/file/d/1qguqqy-SaJs_AgjBToPYoiPe1TIeVLoj/view?usp=drivesdk" },
      { label: "Theory",      url: "https://drive.google.com/file/d/1nc-37W_JJtgdgKCqwZujObHooiwi5h6j/view?usp=drivesdk" },
    ],
  },
  {
    title: "Carbonyl Compounds (Aldehydes & Ketones)",
    items: [
      { label: "Flowchart 1", url: "https://drive.google.com/file/d/1qZlg93_bsAET7Mt0YC7xy55zvF3xvrtF/view?usp=drivesdk" },
      { label: "Flowchart 2", url: "https://drive.google.com/file/d/1qc9fca6c67KMMxq1HdgiA39Zxzu5Or4E/view?usp=drivesdk" },
      { label: "Theory",      url: "https://drive.google.com/file/d/1ovdor-aUerlxkK3mtphCIkdlAWZ7SBZd/view?usp=drivesdk" },
    ],
  },
  {
    title: "Carboxylic Acids",
    items: [
      { label: "Flowchart 1", url: "https://drive.google.com/file/d/1pUpCBhuVbi_Q7DYpOC0k05VlFGbL6iIr/view?usp=drivesdk" },
      { label: "Flowchart 2", url: "https://drive.google.com/file/d/1pemAhOQ1Pmhb6waxFHCKTotccEnrO8mj/view?usp=drivesdk" },
      { label: "Theory",      url: "https://drive.google.com/file/d/1dJ9OtP4XMjDyp-Gf0jBBWZe6rfTm8oa1/view?usp=drivesdk" },
    ],
  },
  {
    title: "Amines",
    items: [
      { label: "Flowchart 1", url: "https://drive.google.com/file/d/1p8n-b_vL2i-6ePNKzPqvfZLEGUx1otsW/view?usp=drivesdk" },
      { label: "Flowchart 2", url: "https://drive.google.com/file/d/1p6W_oYoWXzAUoO0BmMNmwe2lwrNVnvX4/view?usp=drivesdk" },
      { label: "Theory",      url: "https://drive.google.com/file/d/1Y3LMPo5AyvsBIRdXCzSx_3-02PI9f7Gi/view?usp=drivesdk" },
    ],
  },
  {
    title: "Biomolecules & Polymers",
    items: [
      { label: "Flowchart 1", url: "https://drive.google.com/file/d/1pGJmHMOExgn0psB2h5l7tr34aTZd3X7X/view?usp=drivesdk" },
      { label: "Flowchart 2", url: "https://drive.google.com/file/d/1pJPRkXt_GWz2LjQ1x4k0LKKsx3FsqkTR/view?usp=drivesdk" },
      { label: "Flowchart 3", url: "https://drive.google.com/file/d/1pTDvRRXnPeJhV1nRRaE0--3eUhmkmx6S/view?usp=drivesdk" },
      { label: "Flowchart 4", url: "https://drive.google.com/file/d/1pOQ2fMA88DfnI2B7XJnPgTQm5yjHHfNu/view?usp=drivesdk" },
      { label: "Theory",      url: "https://drive.google.com/file/d/1nna9BygcqTUbEA9Vve9nvcLY7S7AcQJA/view?usp=drivesdk" },
    ],
  },
];

const BOOKS = [
  { title: "MS Chouhan",               url: "https://drive.google.com/file/d/1rGPAMzg0fnPXfbYUZPVTJPeKuQeDzAo-/view?usp=drivesdk" },
  { title: "Sorcerer Supreme",         url: "https://drive.google.com/file/d/1rI6t_STudgyXRPTcbjKh92Ds-0TXlrqb/view?usp=drivesdk" },
  { title: "Himanshu Pandey",          url: "https://drive.google.com/file/d/1rFHT_USCRlXJW4e21k94Q5spWkrPRKI6/view?usp=drivesdk" },
  { title: "Arihant Chemistry Handbook", url: "https://drive.google.com/file/d/1lBgW4GO4SygVsFASQeaBfEmpZtxWWvZV/view?usp=drivesdk" },
  { title: "NCERT Chemistry Part 2",   url: "https://drive.google.com/file/d/1rDrySfcoBDulCHQsWLo0tWG0l8Eg4-Ke/view?usp=drivesdk" },
];

/** -------------------------------
 *  UI HELPERS
 *  ------------------------------*/
const TabButton = ({ title, active, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderRadius: 10,
      backgroundColor: active ? "#1976d2" : "#e3f2fd",
      marginRight: 8,
    }}
  >
    <Text style={{ color: active ? "#fff" : "#0d47a1", fontWeight: "700" }}>{title}</Text>
  </TouchableOpacity>
);

const Item = ({ text, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ backgroundColor: "#f5f5f5", padding: 12, borderRadius: 10, marginBottom: 8 }}
  >
    <Text style={{ color: "#1565c0" }}>➤ {text}</Text>
  </TouchableOpacity>
);

/** -------------------------------
 *  APP
 *  ------------------------------*/
export default function App() {
  const [tab, setTab] = useState("Chapters");
  const [query, setQuery] = useState("");

  const open = async (url) => {
    try {
      const ok = await Linking.canOpenURL(url);
      if (ok) await Linking.openURL(url);
      else alert("Cannot open this link. Make sure it is shared to 'Anyone with the link'.");
    } catch (e) {
      alert("Failed to open. Check your internet and Drive permissions.");
    }
  };

  const filteredChapters = CHAPTERS
    .filter((c) => c.title.toLowerCase().includes(query.toLowerCase()))
    .map((c) => ({
      ...c,
      items: c.items, // keep order
    }));

  const filteredBooks = BOOKS.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "900", marginBottom: 14 }}>
        JEE Organic Chemistry
      </Text>

      {/* Tabs */}
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        <TabButton title="Chapters" active={tab === "Chapters"} onPress={() => setTab("Chapters")} />
        <TabButton title="Books"    active={tab === "Books"}    onPress={() => setTab("Books")} />
      </View>

      {/* Search */}
      <TextInput
        placeholder={tab === "Chapters" ? "Search chapters..." : "Search books..."}
        value={query}
        onChangeText={setQuery}
        style={{
          borderWidth: 1,
          borderColor: "#cfcfcf",
          padding: 10,
          borderRadius: 10,
          marginBottom: 12,
        }}
      />

      {tab === "Chapters" ? (
        <View>
          {filteredChapters.map((chapter, i) => (
            <View key={i} style={{ marginBottom: 18 }}>
              <Text style={{ fontSize: 18, fontWeight: "800", marginBottom: 8 }}>
                {chapter.title}
              </Text>
              {chapter.items.map((it, idx) => (
                <Item key={idx} text={it.label} onPress={() => open(it.url)} />
              ))}
            </View>
          ))}
        </View>
      ) : (
        <View>
          {filteredBooks.map((b, i) => (
            <Item key={i} text={`📘 ${b.title}`} onPress={() => open(b.url)} />
          ))}
        </View>
      )}

      <View style={{ height: 24 }} />
      <Text style={{ color: "#777", fontSize: 12 }}>
        Tip: If a link doesn’t open, set Google Drive sharing to “Anyone with the link → Viewer”.
      </Text>
      <View style={{ height: 24 }} />
    </ScrollView>
  );
}
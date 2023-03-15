package Utilities;


import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Util {

    private static final String CONFIGFILEPATH = "./Testdata.json";

    public String jsonRead(String userName) throws Exception {

        JSONArray jsonArray = new JSONArray(readJsonFile(CONFIGFILEPATH));
        String value = null;
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject obj = jsonArray.getJSONObject(i);
            value = obj.getString("password");
            value = Decryption(value);
            if (userName.contentEquals(obj.getString("username")))
                break;
        }
        return value;
    }

    private String readJsonFile(String configfilepath) {
        try (InputStream is = new FileInputStream(configfilepath)) {
            return IOUtils.toString(is, StandardCharsets.UTF_8);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public String jsonwrite(String username) throws Exception {

        JSONArray jsonArray = new JSONArray(readJsonFile(CONFIGFILEPATH));
        String value = null;
        for (int i = 0; i < jsonArray.length(); i++) {

            JSONObject obj = jsonArray.getJSONObject(i);
            if (username.contentEquals(obj.getString("username"))) {
                value = obj.getString("password");
                System.out.println(value);
                obj.put("password",Encrption(value));
                FileWriter file = new FileWriter(CONFIGFILEPATH);
                    file.write(jsonArray.toString());
                    file.flush();
                value = obj.getString("password");
                System.out.println(value);
            }
        }
        return value;
    }

    private String Encrption(String value) throws Exception {
        byte[] encodedValue = Base64.getEncoder().encode(value.getBytes());
        String encoded = new String(encodedValue,"UTF8");
        return encoded;
    }

    private String Decryption(String value) throws Exception {
        byte[] decodedValue = Base64.getDecoder().decode(value.getBytes());
        String decoded = new String(decodedValue,"UTF8");
        return decoded;
    }

    public List stringToJsonToList(String message) throws IOException {
        JSONArray jsonArray = new JSONArray(message);
        return IntStream.range(0, jsonArray.length())
                .mapToObj(index -> ((JSONObject)jsonArray.get(index)).optString("name"))
                .collect(Collectors.toList());
    }

}

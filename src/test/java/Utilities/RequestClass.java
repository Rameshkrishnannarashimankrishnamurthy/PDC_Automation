package Utilities;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

public class RequestClass {
    Response response;
    public String getMethod(String url) {

        String statusMessage = null;
        try {

            baseURI = url;
            RequestSpecification request = RestAssured.given();
            response = request.get();
            statusMessage = getResponseBody();
            getResponseStatus();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return statusMessage;
    }

    public String postMethod(String url,String query) {

        String statusMessage = null;
        try {

            baseURI = url;
            statusMessage = postResponseBody(query);
            postResponseStatus();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return statusMessage;
    }

    private String getResponseBody() throws Exception {
        try {
            String statusMessage = response.body().asString();
            return statusMessage;
        }
        catch (Exception e) {
            throw new Exception(e);
        }

    }

    private String postResponseBody(String query) throws Exception {
        try {
                response = given().contentType(ContentType.JSON).body(query).when().post(baseURI);
                String statusMessage = response.body().asString();
            return statusMessage;
        }
        catch (Exception e) {
            throw new Exception(e);
        }

    }

    private void getResponseStatus() {
       given().when().get(baseURI).then().assertThat().statusCode(200);
    }

    private void postResponseStatus() {
        assertThat(response.getStatusCode(), equalTo(200));
    }
}

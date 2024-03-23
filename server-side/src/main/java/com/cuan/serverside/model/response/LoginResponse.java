package com.cuan.serverside.model.response;

public class LoginResponse {
    private String hashedId;
    private String username;
    private String token;

    public LoginResponse(String hashedId, String username, String token) {
        this.hashedId = hashedId;
        this.username = username;
        this.token = token;
    }

    public String getHashedId() {
        return hashedId;
    }

    public void setHashedId(String hashedId) {
        this.hashedId = hashedId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}

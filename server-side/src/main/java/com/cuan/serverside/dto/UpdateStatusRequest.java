package com.cuan.serverside.dto;

import lombok.Data;

@Data
public class UpdateStatusRequest {
    private Long id;
    private String statusPengajuan;
    private String adminName;
}

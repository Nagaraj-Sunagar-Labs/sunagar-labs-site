package com.sunagarlabs.portfolio.resource.dto;

import com.sunagarlabs.portfolio.resource.entity.ResourceCategory;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;

@Builder
public record UpdateResourceRequest(
        @NotBlank @Size(max = 255) String title,
        @NotBlank @Size(max = 2000) String description,
        @NotNull ResourceCategory category,
        @NotBlank @Size(max = 80) String type,
        @NotBlank @Size(max = 1024) String link
) {
}
